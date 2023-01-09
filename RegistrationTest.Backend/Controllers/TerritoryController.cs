using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RegistrationTest.Backend.DAL;

namespace RegistrationTest.Backend.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class TerritoryController : ControllerBase
    {
        private readonly UserDbContext _dbContext;

        public TerritoryController(UserDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("countries")]
        public async Task<IActionResult> GetAllCountries()
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var countries = await _dbContext.Countries.ToListAsync();
            return Ok(countries);
        }

        [HttpGet]
        [Route("provinces/{countryId:Guid}")]
        public async Task<IActionResult> GetAllProvinces([FromRoute] Guid countryId)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var provinces = await _dbContext.Provinces.Where(p => p.CountryId == countryId).ToListAsync();
            return Ok(provinces);
        }
    }
}
