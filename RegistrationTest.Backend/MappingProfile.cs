using AutoMapper;
using RegistrationTest.Backend.DTO;
using RegistrationTest.Backend.Models;

namespace RegistrationTest.Backend
{
    public class MappingProfile : Profile
    {

        public MappingProfile()
        {
            CreateMap<UserForRegistrationDto, User>().ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));
            CreateMap<CountryRequestDto, Country>();
            CreateMap<ProvinceRequestDto, Province>();
        }
    }
}
