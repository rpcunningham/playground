using System;
using System.Collections.Generic;

namespace KS.Domain.Entities
{
    public class Student : BaseEntity
    {        
        public string LastName { get; set; }
        public string FirstMidName { get; set; }
        public DateTime EnrollmentDate { get; set; }

        public virtual ICollection<Enrollment> Enrollments { get; set; }
    }
}
