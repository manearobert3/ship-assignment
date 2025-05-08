using maritime_app.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace maritime_app.Controllers
{
    [Route("api/country")]
    [ApiController]
    public class CountryController : ControllerBase
    {

        private readonly MaritimeDBContext _dbContext;

        public CountryController(MaritimeDBContext dbContext)
        {

            _dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult getAllCountry()
        {
            var countries = _dbContext.Countries.ToList();
            return Ok(countries);
        }

    }
}
