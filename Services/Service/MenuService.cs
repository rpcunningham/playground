using KS.DataAccess.Context;
using KS.Services.Interface;

namespace KS.Services.Service
{
    public class MenuService : IMenuService
    {
        //private ApplicationContext db = new ApplicationContext();
        private GenericDbContext<Domain.Entities.Menu> _db = new GenericDbContext<Domain.Entities.Menu>();

        public  Domain.Entities.Menu GetMenu(int id)
        {
            return _db.Entity.Find(id);
        }
    }
}
