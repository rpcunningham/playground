using KS.Domain.Entities;
using System.Linq;

namespace KS.Services.Interface
{
    public interface IMenuService
    {
        IQueryable<Menu> GetMenus();
        Menu GetMenu(int id);
        int PutMenu(int id, Menu menu);
        Menu PostMenu(Menu menu);
        Menu DeleteMenu(int id);
        bool MenuExists(int id);
    }
}
