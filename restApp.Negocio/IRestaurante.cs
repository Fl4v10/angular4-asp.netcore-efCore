using System;
using System.Collections.Generic;
using System.Text;

namespace restApp.Negocio
{
    interface IRestaurante
    {
        ICollection<RestauranteNG> GetRestaurantes();
        RestauranteNG GetRestaurante(int id);
        int Insert(RestauranteNG restaurante);
        int Delete(int id);
        int Update(int id, RestauranteNG restaurante);
    }
}
