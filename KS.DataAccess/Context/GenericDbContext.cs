using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace KS.DataAccess.Context
{
    public class GenericDbContext<T> : DbContext where T : class
    {

        public GenericDbContext() : base("DefaultConnection")
        {
        }

        public DbSet<T> Entity { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}