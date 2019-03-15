using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength=6, ErrorMessage="Enter a password between 6 and 8 characters length.")]
        public string Password { get; set; }
    }
}