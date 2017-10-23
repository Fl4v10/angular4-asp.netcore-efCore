using System;
using System.Collections.Generic;
using System.Text;

namespace restApp.Negocio
{
    interface IPrato
    {
        ICollection<PratoNG> GetPratos();
        PratoNG GetPrato(int id);
        int Insert(PratoNG prato);
        int Delete(int id);
        int Update(int id, PratoNG prato);
    }
}
