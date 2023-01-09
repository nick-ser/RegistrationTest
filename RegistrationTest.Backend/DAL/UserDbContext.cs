using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RegistrationTest.Backend.Models;

namespace RegistrationTest.Backend.DAL
{
    public class UserDbContext : IdentityDbContext<User>
    {
        public UserDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CountryConfiguration());
            modelBuilder.ApplyConfiguration(new ProvinceConfiguration());
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Province> Provinces { get; set; }
        public DbSet<Country> Countries { get; set; }
    }
}
