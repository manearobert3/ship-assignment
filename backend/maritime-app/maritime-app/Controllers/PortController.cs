using maritime_app.Data;
using maritime_app.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace maritime_app.Controllers
{
    [Route("api/port")]
    [ApiController]
    public class PortController : ControllerBase
    {
        private readonly MaritimeDBContext _dbContext;

        public PortController(MaritimeDBContext dBContext)
        {
            _dbContext = dBContext;
        }

        [HttpGet]
        public IActionResult getAllPorts()
        {
            var ports = _dbContext.Ports
                 .Select(p => new
                 {
                     Id = p.id,
                     PortName = p.portName,
                     PortCountry = p.portCountry,
                     DepartingVoyages = p.departingVoyages.Select(v => $"Voyage #{v.id} on {v.voyageDate:yyyy-MM-dd}").ToList(),
                     ArrivingVoyages = p.arrivingVoyages.Select(v => $"Voyage #{v.id} on {v.voyageDate:yyyy-MM-dd}").ToList()
                 })
        .ToList();
            return Ok(ports);
        }

        [HttpPost]
        public IActionResult addPort(PortDTO port)
        {
            var newPort = new Models.Port
            {
                portName = port.portName,
                portCountry = port.portCountry,
            };
            _dbContext.Ports.Add(newPort);
            _dbContext.SaveChanges();
            return Ok(newPort);
        }

    }
}
