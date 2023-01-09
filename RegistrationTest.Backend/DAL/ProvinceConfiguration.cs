using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RegistrationTest.Backend.Models;

namespace RegistrationTest.Backend.DAL
{
    public class ProvinceConfiguration : IEntityTypeConfiguration<Province>
    {
        public void Configure(EntityTypeBuilder<Province> builder)
        {
            builder.HasData
            (
                new Province() { Id = Guid.NewGuid(), CountryId = new Guid("c9d4c053-49b6-410c-bc78-2d54a9991870"), Name = "Moscow"},
                new Province() { Id = Guid.NewGuid(), CountryId = new Guid("c9d4c053-49b6-410c-bc78-2d54a9991870"), Name = "Saint-Petersburg"},
                new Province() { Id = Guid.NewGuid(), CountryId = new Guid("c9d4c053-49b6-410c-bc78-2d54a9991870"), Name = "Yekaterinburg"},
                new Province() { Id = Guid.NewGuid(), CountryId = new Guid("3d490a70-94ce-4d15-9494-5248280c2ce3"), Name = "Washington D.C."},
                new Province() { Id = Guid.NewGuid(), CountryId = new Guid("3d490a70-94ce-4d15-9494-5248280c2ce3"), Name = "New-York"},
                new Province { Id = Guid.NewGuid(), CountryId = new Guid("3d490a70-94ce-4d15-9494-5248280c2ce3"), Name = "Los Angeles"}
            );
        }
    }
}
