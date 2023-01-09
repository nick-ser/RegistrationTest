namespace RegistrationTest.Backend.Models
{
    public class Province
    {
        public Guid Id { get; set; }

        public Guid CountryId { get; set; }

        public string Name { get; set; }
    }
}
