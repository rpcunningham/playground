using System.Collections.Generic;

namespace KS.Domain.Entities
{
    public class Skillstree : BaseEntity
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public List<int> Scenarios { get; set; }
        public List<int> Achievements { get; set; }
        public int? Pctcomplete { get; set; }
        public string Textposition{ get; set; }
    }
}
