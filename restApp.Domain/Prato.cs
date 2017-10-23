using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace restApp.Domain
{
    public class Prato
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Nome { get; set; }
        public decimal Valor { get; set; }

        public Restaurante Restaurante { get; set; }
        public int RestauranteId { get; set; }
    }

}