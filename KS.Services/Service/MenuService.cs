using KS.DataAccess.Context;
using KS.Domain.Entities;
using KS.Services.Interface;
using System.Data.Entity;
using System.Linq;

namespace KS.Services.Service
{
    public class MenuService : IMenuService
    {
        public IQueryable<Menu> GetMenus()
        {
            using (var context = new GenericDbContext<Menu>())
            {
                try
                {
                    return context.Entity;
                }
                catch (System.Exception ex)
                {
                    throw ex;
                }
            }
        }

        public Menu GetMenu(int id)
        {
            using (var context = new GenericDbContext<Menu>())
            {
                try
                {
                    return context.Entity.Find(id);
                }
                catch (System.Exception ex)
                {
                    throw ex;
                }
            }
        }

        public int PutMenu(int id, Menu menu)
        {
            using (var context = new GenericDbContext<Menu>())
            {
                try
                {
                    context.Entry(menu).State = EntityState.Modified;
                    return context.SaveChanges();
                }
                catch (System.Exception ex)
                {
                    throw ex;
                }
            }
        }

        public Menu PostMenu(Menu menu)
        {
            using (var context = new GenericDbContext<Menu>())
            {
                try
                {
                    context.Entity.Add(menu);
                    context.SaveChanges();
                    return menu;
                }
                catch (System.Exception ex)
                {
                    throw ex;
                }
            }
        }

        public Menu DeleteMenu(int id)
        {
            using (var context = new GenericDbContext<Menu>())
            {
                try
                {
                    Menu menu = context.Entity.Find(id);
                    if (menu == null)
                    {
                        return null;
                    }
                    context.Entity.Remove(menu);
                    context.SaveChanges();
                    return menu;
                }
                catch (System.Exception ex)
                {
                    throw ex;
                }
            }
        }

        public bool MenuExists(int id)
        {
            using (var context = new GenericDbContext<Menu>())
            {
                try
                {
                    return context.Entity.Count(e => e.ID == id) > 0;
                }
                catch (System.Exception ex)
                {
                    throw ex;
                }
            }            
        }
    }
}
