using System;

namespace restApp.Negocio
{
    public class PratoNG
    {
        public Nullable<int> Id { get; set; }

        public string Nome { get; set; }
        public decimal Valor { get; set; }

        public RestauranteNG Restaurante { get; set; }
        public int RestauranteId { get; set; }
    }
}
