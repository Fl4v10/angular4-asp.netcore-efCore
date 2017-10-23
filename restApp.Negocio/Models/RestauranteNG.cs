using System.Collections.Generic;

namespace restApp.Negocio
{
    public class RestauranteNG
    {
        public int? id { get; set; }
        public string nome { get; set; }

        public ICollection<PratoNG> pratos { get; set; }
    }
}
