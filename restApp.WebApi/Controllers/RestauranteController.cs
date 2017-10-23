using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using restApp.Negocio;
using System.Net.Http;

namespace restApp.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class RestauranteController : Controller
    {

        private RestauranteRepository _rest = new RestauranteRepository();

        // GET: api/restaurante
        [HttpGet]
        public List<RestauranteNG> Get()
        {
            try
            {
                var restaurantes = _rest.GetRestaurantes().ToList();

                return restaurantes;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        // GET: api/restaurante
        //[HttpGet]
        //public RestauranteNG Get(int id)
        //{
        //  try
        //  {
        //    var restaurante = _rest.GetRestaurante(id);

        //    return restaurante;
        //  }
        //  catch (Exception e)
        //  {
        //    throw e;
        //  }
        //}

        // POST api/restaurante
        [HttpPost]
        public int Post([FromBody]dynamic restaurante)
        {
            try
            {
                RestauranteNG rest = new RestauranteNG() { id= null , nome= restaurante.nome, pratos = null };
                int resp = _rest.Insert(rest);

                 return resp;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        // PUT: api/Restaurante/5
        [HttpPut("{id}")]
        public int Put(int id, RestauranteNG restaurante)
        {
            try
            {
                return _rest.Update(id, restaurante);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        //// DELETE api/restaurante/5
        [HttpDelete("{id}")]
        public int Delete(int id)
        {
            try
            {
                int resp = _rest.Delete(id);

                return resp;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
