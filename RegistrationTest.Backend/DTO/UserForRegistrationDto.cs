using System.ComponentModel.DataAnnotations;

namespace RegistrationTest.Backend.DTO
{
    public class UserForRegistrationDto
    {
        [Required(ErrorMessage = "Country is required.")]
        public Guid CountryId { get; set; }

        [Required(ErrorMessage = "Province is required.")]
        public Guid ProvinceId { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

        [Display(Name = "Is Agree")]
        [Range(typeof(bool), "true", "true", ErrorMessage = "The field Is Agree must be checked.")]
        public bool IsAgree { get; set; }
    }
}
