using maritime_app.Models;
using Microsoft.EntityFrameworkCore;

namespace maritime_app.Data
{
    public class MaritimeDBContext : DbContext
    {
        public MaritimeDBContext() { }
        public MaritimeDBContext(DbContextOptions<MaritimeDBContext> options) : base(options) { }


        public DbSet<Ship> Ships { get; set; } = null!;
        public DbSet<Voyage> Voyages { get; set; } = null!;
        public DbSet<Port> Ports { get; set; } = null!;
        public DbSet<Country> Countries { get; set; } = null!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Voyage>()
                .HasOne(v => v.departurePort)
                .WithMany(p => p.departingVoyages)
                .HasForeignKey(v => v.departurePortId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Voyage>()
                .HasOne(v => v.arrivalPort)
                .WithMany(p => p.arrivingVoyages)
                .HasForeignKey(v => v.arrivalPortId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Voyage>()
                .HasOne(v => v.ship)
                .WithMany(s => s.voyages)
                .HasForeignKey(v => v.shipId);
        }
    }
}
