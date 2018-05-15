using KS.Domain.Entities;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace KS.Domain.Context
{
    public class ApplicationContext : DbContext
    {

        public ApplicationContext() : base("DefaultConnection")
        {
        }

        //Example Project
        public DbSet<Student> Students { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Course> Courses { get; set; }

        //Sonario
        public DbSet<Menu> Menus { get; set; }
        public DbSet<Achievement> Achievements { get; set; }
        public DbSet<Skillstree> Skillstrees { get; set; }
        public DbSet<Setup> Setup { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}