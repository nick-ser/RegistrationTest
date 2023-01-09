using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace RegistrationTest.Backend.Models
{
    public class User : IdentityUser
    {
        public Guid CountryId { get; set; }
        
        public Guid ProvinceId { get; set; }
        public bool IsAgree { get; set; }
    }
}
