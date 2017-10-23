using Microsoft.EntityFrameworkCore;
using restApp.Domain;

public class RestauranteContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=restDb;Trusted_Connection=True;");
    }

    public DbSet<Restaurante> Restaurantes { get; set; }
    public DbSet<Prato> Pratos { get; set; }
}
