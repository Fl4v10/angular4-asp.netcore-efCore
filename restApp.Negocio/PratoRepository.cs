using restApp.Domain;
using System.Collections.Generic;
using System.Linq;

namespace restApp.Negocio
{
    public class PratoRepository : IPrato
    {
        private RestauranteContext _ctx;

        public PratoRepository()
        {
            _ctx = new RestauranteContext();
        }

        public int Delete(int id)
        {
            int res = 0;
            var prato = _ctx.Pratos.FirstOrDefault(p => p.Id == id);

            if (prato != null)
            {
                _ctx.Pratos.Remove(prato);
                res = _ctx.SaveChanges();
            }
            return res;
        }

        public PratoNG GetPrato(int id)
        {
            var p = _ctx.Pratos.FirstOrDefault(b => b.Id == id);

            PratoNG prato = new PratoNG();
            prato.Id = p.Id;
            prato.Nome = p.Nome;
            prato.Valor = p.Valor;
            prato.RestauranteId = prato.RestauranteId;

            return prato;
        }

        public ICollection<PratoNG> GetPratos()
        {
            var pratos = _ctx.Pratos.ToList();
            List<PratoNG> pratosList = new List<PratoNG>();

            foreach (var item in pratos)
            {
                pratosList.Add(new PratoNG()
                {
                    Id = item.Id,
                    Nome = item.Nome,
                    Valor = item.Valor
                });
            }

            return pratosList;
        }

        public int Insert(PratoNG p)
        {
            Prato prato = new Prato()
            {
                Nome = p.Nome,
                Valor = p.Valor,
                RestauranteId = p.RestauranteId
            };

            _ctx.Pratos.Add(prato);
            int res = _ctx.SaveChanges();

            return res;
        }

        public int Update(int id, PratoNG p)
        {
            int res = 0;
            var prato = _ctx.Pratos.Find(id);

            if (prato != null)
            {
                prato.Nome = p.Nome;
                prato.Valor = p.Valor;

                res = _ctx.SaveChanges();
            };
            return res;
        }
    }
}
