using maritime_app.Models;

namespace maritime_app.DTOs
{
    public class VoyageDTO
    {
        public int id { get; set; }
        public DateTime voyageDate { get; set; }
        public string departurePort { get; set; } = null!;
        public string arrivalPort { get; set; } = null!;
        public int ship { get; set; }
        public DateTime voyageStart { get; set; }
        public DateTime voyageEnd { get; set; }
    }
}
