using KS.Domain.Entities;
using KS.Migrations.Initlizer;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;

namespace KS.Migrations.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<ApplicationContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        private void cleanup(ApplicationContext context)
        {
            List<Enrollment> enrollments = context.Enrollments.ToList();
            context.Enrollments.RemoveRange(enrollments);

            context.SaveChanges();

            List<Student> students = context.Students.ToList();
            context.Students.RemoveRange(students);

            context.SaveChanges();
            List<Course> courses = context.Courses.ToList();
            context.Courses.RemoveRange(courses);
            
            context.SaveChanges();
            List<Menu> menus = context.Menus.ToList();
            context.Menus.RemoveRange(menus);

            context.SaveChanges();
            List<Achievement> achievements = context.Achievements.ToList();
            context.Achievements.RemoveRange(achievements);

            context.SaveChanges();
            List<Skillstree> skillstrees = context.Skillstrees.ToList();
            context.Skillstrees.RemoveRange(skillstrees);

            context.SaveChanges();
            List<Setup> setups = context.Setup.ToList();
            context.Setup.RemoveRange(setups);

            context.SaveChanges();
        }

        protected override void Seed(ApplicationContext context)
        {
            //if (System.Diagnostics.Debugger.IsAttached == false)
            //{
            //    System.Diagnostics.Debugger.Launch();
            //}

            cleanup(context);

            //Add SeedData
            if (false)
            {
                #region Student
                List<Student> students = Student.SeedData();
                students.ForEach(s => context.Students.Add(s));
                context.SaveChanges();
                #endregion

                #region Course
                var courses = new List<Course>
                {
                new Course{CourseID=1050,Title="Chemistry",Credits=3,},
                new Course{CourseID=4022,Title="Microeconomics",Credits=3,},
                new Course{CourseID=4041,Title="Macroeconomics",Credits=3,},
                new Course{CourseID=1045,Title="Calculus",Credits=4,},
                new Course{CourseID=3141,Title="Trigonometry",Credits=4,},
                new Course{CourseID=2021,Title="Composition",Credits=3,},
                new Course{CourseID=2042,Title="Literature",Credits=4,}
                };
                courses.ForEach(s => context.Courses.Add(s));
                context.SaveChanges();

                #endregion

                #region Enrollment
                var enrollments = new List<Enrollment>
            {
            new Enrollment{StudentID=1,CourseID=1050,Grade=Grade.A},
            new Enrollment{StudentID=1,CourseID=4022,Grade=Grade.C},
            new Enrollment{StudentID=1,CourseID=4041,Grade=Grade.B},
            new Enrollment{StudentID=2,CourseID=1045,Grade=Grade.B},
            new Enrollment{StudentID=2,CourseID=3141,Grade=Grade.F},
            new Enrollment{StudentID=2,CourseID=2021,Grade=Grade.F},
            new Enrollment{StudentID=3,CourseID=1050},
            new Enrollment{StudentID=4,CourseID=1050,},
            new Enrollment{StudentID=4,CourseID=4022,Grade=Grade.F},
            new Enrollment{StudentID=5,CourseID=4041,Grade=Grade.C},
            new Enrollment{StudentID=6,CourseID=1045},
            new Enrollment{StudentID=7,CourseID=3141,Grade=Grade.A},
            };
                enrollments.ForEach(s => context.Enrollments.Add(s));
                context.SaveChanges();

                #endregion

                #region Setup
                var setup = new List<Setup>
            {
                new Setup{Title="Client Care",Version="2.1.1",IsLMSEnabled=false,Diallegend="<strong>Dial Legend Manifest:</strong><br><ul><li>0-4: Sad </ li >< li > 5 - 7: Meh </ li >< li > 8 - 10: Happy </ li ></ ul > "}
            };
                setup.ForEach(x => context.Setup.Add(x));
                context.SaveChanges();

                #endregion

                #region Skillstree
                var skillstrees = new List<Skillstree>
            {

                new Skillstree{Title = "Define Client Care",Description = "This is a description of this particular node. Lorem ipsum dolor sunt amet locquitur oridibus mater.",Scenarios = (new int[] { 1,2,3 }).ToList(), Achievements = (new int[] { 1 }).ToList()},
                new Skillstree{Title = "Another Behavior Name",Description = "This is a description of this particular node. Lorem ipsum dolor sunt amet locquitur oridibus mater.",Scenarios = (new int[] { 1,2 }).ToList(), Achievements = (new int[] { 1 }).ToList()},
                new Skillstree{Title = "Got Behaviors?",Description = "This is a description of this particular node. Lorem ipsum dolor sunt amet locquitur oridibus mater.",Scenarios = (new int[] { 1 }).ToList(), Achievements = (new int[] { 1 }).ToList()},
                new Skillstree{Title = "More Behaviors!",Description = "This is a description of this particular node. Lorem ipsum dolor sunt amet locquitur oridibus mater.",Scenarios = (new int[] { 1 }).ToList(), Achievements = (new int[] { 1 }).ToList()},
                new Skillstree{Title = "Behavior Mania!",Description = "This is a description of this particular node. Lorem ipsum dolor sunt amet locquitur oridibus mater.",Scenarios = (new int[] { 1 }).ToList(), Achievements = (new int[] { 1 }).ToList()},
                new Skillstree{Title = "Behavior Insanity!",Description = "This is a description of this particular node. Lorem ipsum dolor sunt amet locquitur oridibus mater.",Scenarios = (new int[] { 1 }).ToList(), Achievements = (new int[] { 1 }).ToList()},
                new Skillstree{Title = "Final Node Here",Description = "This is a description of this particular node. Lorem ipsum dolor sunt amet locquitur oridibus mater.",Scenarios = (new int[] { 1 }).ToList(), Achievements = (new int[] { 1 }).ToList()}
            };
                skillstrees.ForEach(x => context.Skillstrees.Add(x));
                context.SaveChanges();

                #endregion

                #region Achievement
                var achievements = new List<Achievement>
            {
                new Achievement {Style = "badge-1", Title = "Testify!", Description = "Watch a customer testimonial to see why client care is important and how it affects our clients." },
                new Achievement { Style = "badge-2", Title = "Purpose Driven!", Description = "Uncover our purpose as a client centered company." },
                new Achievement { Style = "badge-3", Title = "Cultured!", Description = "Define the three components of our client care culture." },
                new Achievement { Style = "badge-4", Title = "Committed!", Description = "Identify the four commitments that our clients tell us are important to them." },
                new Achievement { Style = "badge-7", Title = "Just a test!", Description = "This is just a test to see how the text will appear when mixed items are shown." }
            };
                achievements.ForEach(s => context.Achievements.Add(s));
                context.SaveChanges();

                #endregion

                #region Menu
                var menus = new List<Menu>
            {
                new Menu{ Skilltreenode = "Foundations", Category = "Category 1", Hearts = 0 , Manifest = "xls/scenario-1-v1.xlsx" },
                new Menu{ Prerequisites = (new int[] {1}).Cast<int?>().ToArray(), Skilltreenode = "Make Interactions Easier", Category = "Category 2", Hearts = 0 , Manifest = "xls/scenario-2-v1.xlsx" },
                new Menu{ Prerequisites = (new int[] {1,2}).Cast<int?>().ToArray(), Skilltreenode = "Make Expertise More Accessible", Category = "Category 3", Hearts = 0 , Manifest = "xls/scenario-3-v1.xlsx" },
                new Menu{ Prerequisites = (new int[] {1,2,3}).Cast<int?>().ToArray(), Skilltreenode = "Make Relationship More Human", Category = "Category 2", Hearts = 0 , Manifest = "xls/scenario-4-v1.xlsx" },
                new Menu{ Prerequisites = (new int[] {1,2,3,4}).Cast<int?>().ToArray(), Skilltreenode = "Share Our Success", Category = "Category 2", Hearts = 0 , Manifest = "xls/scenario-5-v1.xlsx" }
            };
                menus.ForEach(s => context.Menus.Add(s));
                context.SaveChanges();

                #endregion
            }
        }
    }
}
