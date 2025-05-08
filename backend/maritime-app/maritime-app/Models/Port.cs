namespace maritime_app.Models
{
    public class Port
    {
        public int id { get; set; }
        public string portName { get; set; } = string.Empty;
        public string portCountry { get; set; } = string.Empty;

        public List<Voyage> departingVoyages { get; set; } = new();
        public List<Voyage> arrivingVoyages { get; set;} = new();
    }
}
