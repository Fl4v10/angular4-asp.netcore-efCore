using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using restApp.Negocio;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace restApp.APIs
{
    [Route("api/[controller]")]
    public class PratoController : Controller
    {
        private PratoRepository _repo = new PratoRepository();

        // GET: api/Prato
        [HttpGet]
        public IEnumerable<PratoNG> Get()
        {
            return _repo.GetPratos();
        }

        // GET: api/Prato/5
        [HttpGet("{id}", Name = "Get")]
        public PratoNG Get(int id)
        {
            return _repo.GetPrato(id);
        }

        // POST: api/Prato
        [HttpPost]
        public int Post([FromBody]dynamic p)
        {
            //RestauranteNG restaurante = new RestauranteNG()
            //{
            //    nome = p.restaurante.nome
            //};

            PratoNG prato = new PratoNG() { Id = null, Nome = p.nome, RestauranteId = p.restauranteId, Valor = p.valor };
            return _repo.Insert(prato);
        }

        // PUT: api/Prato/5
        [HttpPut("{id}")]
        public int Put(int id, PratoNG prato)
        {
            return _repo.Update(id, prato);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            return _repo.Delete(id);
        }
    }
}
