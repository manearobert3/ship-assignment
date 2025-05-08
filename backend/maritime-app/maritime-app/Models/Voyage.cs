namespace maritime_app.Models
{
    public class Voyage
    {
        public int id { get; set; }
        public DateTime voyageDate { get; set; }
        public int departurePortId { get; set; }
        public Port departurePort { get; set; } = null!;
        public int arrivalPortId { get; set; }
        public Port arrivalPort { get; set; } = null!;

        public int shipId {  get; set; }
        public Ship ship { get; set; } = null!;
        public DateTime voyageStart { get; set; }
        public DateTime voyageEnd { get; set;}

    }
}
