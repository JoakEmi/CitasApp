namespace API.Extensions;
   
public static class DateTimeExtensions
{
    public static int CalculateAge(this DateOnly dob){

        var today = DateOnly.FromDateTime(DateTime.UtcNow);
        var age = today.Year - dob.Year;

        // Today 2023-10-23
        // dob 2001-11-26
        // age = 22

        if (dob > today.AddYears(-age)) age--;
        // 2001-11-26 > 2001-10-23
        // age = 21

        return age;
    }   
}