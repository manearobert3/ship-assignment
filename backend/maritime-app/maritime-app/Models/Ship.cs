namespace maritime_app.Models
{
    public class Ship
    {
        public int id { get; set; }
        public string name { get; set; } = string.Empty;
        public double maxSpeed {  get; set; }

        public List<Voyage> voyages { get; set; } = new();
    }
}
