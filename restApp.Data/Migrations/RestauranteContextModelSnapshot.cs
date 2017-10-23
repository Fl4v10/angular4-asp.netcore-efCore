using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace restApp.Data.Migrations
{
    [DbContext(typeof(RestauranteContext))]
    partial class RestauranteContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.2")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("restApp.Domain.Prato", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Nome");

                    b.Property<int>("RestauranteId");

                    b.Property<decimal>("Valor");

                    b.HasKey("Id");

                    b.HasIndex("RestauranteId");

                    b.ToTable("Pratos");
                });

            modelBuilder.Entity("restApp.Domain.Restaurante", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Nome");

                    b.HasKey("Id");

                    b.ToTable("Restaurantes");
                });

            modelBuilder.Entity("restApp.Domain.Prato", b =>
                {
                    b.HasOne("restApp.Domain.Restaurante", "Restaurante")
                        .WithMany("Pratos")
                        .HasForeignKey("RestauranteId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
        }
    }
}
