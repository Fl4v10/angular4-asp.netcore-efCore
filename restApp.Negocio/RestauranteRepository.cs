using restApp.Domain;
using System.Collections.Generic;
using System.Linq;

namespace restApp.Negocio
{
    public class RestauranteRepository : IRestaurante
    {
        private RestauranteContext _ctx;

        public RestauranteRepository()
        {
            _ctx = new RestauranteContext();
        }

        public int Delete(int id)
        {
            int res = 0;
            var restaurante = _ctx.Restaurantes.FirstOrDefault(r => r.Id == id);

            if (restaurante != null)
            {
                _ctx.Restaurantes.Remove(restaurante);
                res = _ctx.SaveChanges();
            }

            return res;
        }

        public RestauranteNG GetRestaurante(int id)
        {
            var restaurante = _ctx.Restaurantes.FirstOrDefault(b => b.Id == id);

            List<PratoNG> pratos = new List<PratoNG>();

            //Verifica se a lista de pratos possui registros para então mapear
            if (restaurante.Pratos != null)
            {
                foreach (var prato in restaurante.Pratos)
                {
                    pratos.Add(new PratoNG()
                    {
                        Id = prato.Id,
                        Nome = prato.Nome,
                        Valor = prato.Valor
                    });
                }
            }

            var rest = new RestauranteNG()
            {
                id = restaurante.Id,
                nome = restaurante.Nome,
                pratos = pratos
            };

            return rest;
        }

        public ICollection<RestauranteNG> GetRestaurantes()
        {
            //Carrega a váriavel com os registros dos restaurantes vindos do banco
            var restaurantes = _ctx.Restaurantes.ToList();
            List<RestauranteNG> restList = new List<RestauranteNG>();

            foreach (var restaurante in restaurantes)
            {
                List<PratoNG> pratos = new List<PratoNG>();

                //Verifica se a lista de pratos possui registros para então mapear
                if (restaurante.Pratos != null)
                {
                    foreach (var prato in restaurante.Pratos)
                    {
                        pratos.Add(new PratoNG()
                        {
                            Id = prato.Id,
                            Nome = prato.Nome,
                            Valor = prato.Valor
                        });
                    }
                }

                restList.Add(new RestauranteNG()
                {
                    id = restaurante.Id,
                    nome = restaurante.Nome,
                    pratos = pratos
                });
            }

            return restList;
        }

        public int Insert(RestauranteNG restaurante)
        {
            int res;

            if (restaurante.nome != null)
            {
                Restaurante rest = new Restaurante()
                {
                    Nome = restaurante.nome,
                    Pratos = null
                };

                _ctx.Restaurantes.Add(rest);

                res = _ctx.SaveChanges();
            }
            else
            {
                return res = 1;
            }

            return res;
        }

        public int Update(int id, RestauranteNG restaurante)
        {
            int res = 0;
            var rest = _ctx.Restaurantes.Find(id);

            if (rest != null)
            {
                rest.Nome = restaurante.nome;
                rest.Pratos = null;
                res = _ctx.SaveChanges();
            };
            return res;
        }
    }

}
