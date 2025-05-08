namespace maritime_app.Models
{
    public class Country
    {
        public int id { get; set; }
        public string countryName { get; set; } = string.Empty;
        public DateTime? visitedDate { get; set; }     
    }
}
