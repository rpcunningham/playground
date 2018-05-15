using KS.DataAccess.Context;
using KS.Domain.Entities;
using KS.Services.Interface;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;

namespace KS.Web.API.Controllers
{
    public class MenusController : ApiController
    {
        private GenericDbContext<Menu> db = new GenericDbContext<Menu>();
        private IMenuService _service;

        public MenusController(IMenuService service)
        {
            _service = service;
        }

        // GET: api/Menus
        [ResponseType(typeof(IQueryable<Menu>))]
        public IHttpActionResult GetMenus()
        {
            IQueryable<Menu> menus = _service.GetMenus();
            if (menus == null)
            {
                return NotFound();
            }
            return Ok(menus);
        }

        // GET: api/Menus/5
        [ResponseType(typeof(Menu))]
        public IHttpActionResult GetMenu(int id)
        {
            Menu menu = _service.GetMenu(id);            
            if (menu == null)
            {
                return NotFound();
            }
            return Ok(menu);
        }

        // PUT: api/Menus/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMenu(int id, Menu menu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != menu.ID)
            {
                return BadRequest();
            }

            try
            {
                _service.PutMenu(id, menu);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_service.MenuExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Menus
        [ResponseType(typeof(Menu))]
        public IHttpActionResult PostMenu(Menu menu)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            Menu menuReturn = _service.PostMenu(menu);
            if (menuReturn == null)
            {
                return NotFound();
            }
            else
            {
                return CreatedAtRoute("MenusController", new { id = menu.ID }, menu);
            }            
        }

        // DELETE: api/Menus/5
        [ResponseType(typeof(Menu))]
        public IHttpActionResult DeleteMenu(int id)
        {
            Menu menu = _service.DeleteMenu(id);
            if (menu == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(menu);
            }
        }
    }
}