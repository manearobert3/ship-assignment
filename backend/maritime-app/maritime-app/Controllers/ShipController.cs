using maritime_app.Data;
using maritime_app.DTOs;
using maritime_app.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace maritime_app.Controllers
{
    [Route("api/ship")]
    [ApiController]
    public class ShipController : ControllerBase
    {
        private readonly MaritimeDBContext _dbContext;

        public ShipController(MaritimeDBContext dbContext) {

            _dbContext = dbContext;
        } 
        [HttpGet]
        public IActionResult getAllShips()
        {
            var ships = _dbContext.Ships
                .Select(v => new
                {
                    v.id,
                    v.name,
                    v.maxSpeed,
                })
                .ToList();
            return Ok(ships);

        }

       
        [HttpPost]
        public IActionResult addShip(ShipDTO ship)
        {
            var newShip = new Ship
            {
                name = ship.name,
                maxSpeed = ship.maxSpeed,
            };

            _dbContext.Ships.Add(newShip);
            _dbContext.SaveChanges();
            return Ok(newShip);

        }

        [HttpDelete("{id:int}")]
        public IActionResult deleteShip(int id)
        {
            var shipToDelete = _dbContext.Ships.Find(id);
            if (shipToDelete != null)
            {
                _dbContext.Ships.Remove(shipToDelete);
                _dbContext.SaveChanges();
                return Ok(id);
            }
            return NotFound();
        }

        [HttpPut("{id:int}")]
        public IActionResult updateShip(int id, ShipDTO updatedShip)
        {
            var initialShip = _dbContext.Ships.Find(id);
            if (initialShip != null)
            { 
                initialShip.name = updatedShip.name;
                initialShip.maxSpeed = updatedShip.maxSpeed;
                _dbContext.SaveChanges();
            }
            else
            {
                return NotFound();
            }
            return Ok(updatedShip);
           
        }
        [HttpGet("voyages")]
        public IActionResult getVoyagesPerShip()
        {
            var voyagesPerShip = _dbContext.Ships
                .Select(v => new
                {
                    v.id,
                    v.name,
                    v.maxSpeed,
                    v.voyages.Count,
                })
                .ToList();
            return Ok(voyagesPerShip);

        }
    }
}
