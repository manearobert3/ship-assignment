using maritime_app.Data;
using maritime_app.DTOs;
using maritime_app.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace maritime_app.Controllers
{
    [Route("api/voyage")]
    [ApiController]
    public class VoyageController : ControllerBase
    {

        private readonly MaritimeDBContext _dbContext;

        public VoyageController(MaritimeDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult getAllVoyages()
        {
            var voyages = _dbContext.Voyages
            .Include(v => v.departurePort)
            .Include(v => v.arrivalPort)
            .Include(v => v.ship)
            .Select(v => new
            {
                v.id,
                v.voyageDate,
                departurePort = new { v.departurePort.id, v.departurePort.portName },
                arrivalPort = new { v.arrivalPort.id, v.arrivalPort.portName },
                ship = new { v.ship.id, v.ship.name },
                v.voyageStart,
                v.voyageEnd
            })  
            .ToList();
            return Ok(voyages);
        }

        [HttpPost]
        public IActionResult addVoyage(VoyageDTO newVoyageDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var ship = _dbContext.Ships.Find(newVoyageDto.ship);
            if (ship == null)
            {
                return BadRequest("Invalid Voyage ID");
            }

            var departurePort = _dbContext.Ports.FirstOrDefault(p => p.portName == newVoyageDto.departurePort);
            var arrivalPort = _dbContext.Ports.FirstOrDefault(p => p.portName == newVoyageDto.arrivalPort);
            if (departurePort == null || arrivalPort == null)
            {
                return BadRequest("Invalid voyage information.");
            }

            var newVoyage = new Voyage
            {
                voyageDate = newVoyageDto.voyageDate,
                departurePortId = departurePort.id,
                arrivalPortId = arrivalPort.id,
                shipId = ship.id,
                voyageStart = newVoyageDto.voyageStart,
                voyageEnd = newVoyageDto.voyageEnd
            };

            _dbContext.Voyages.Add(newVoyage);
            _dbContext.SaveChanges();

            return Ok(newVoyage);
        }
        


    }
}
