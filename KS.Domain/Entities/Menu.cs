using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace KS.Domain.Entities
{
    public class Menu : BaseEntity
    {
        [NotMapped]
        public int?[] Prerequisites
        {
            get
            {
                if (this.PrerequisitesCSV == null)
                {
                    return null;
                }
                string[] arr = this.PrerequisitesCSV.TrimEnd(',').Split(',');
                return Array.ConvertAll(arr, s => int.Parse(s)).Cast<int?>().ToArray();
            }
            set
            {
                if (value == null)
                {
                    this.PrerequisitesCSV = null;
                }
                else
                {
                    value.ToList().ForEach(s =>
                    {
                        this.PrerequisitesCSV += string.Format("{0},", s);
                    });
                    this.PrerequisitesCSV.TrimEnd(',');
                }
            }
        }

        [EditorBrowsable(EditorBrowsableState.Never)]
        public string PrerequisitesCSV { get; set; }

        public string Skilltreenode { get; set; }
        [StringLength(255)]
        public string Category { get; set; }
        public int Hearts { get; set; }
        public string Manifest { get; set; }
        public string SomethingElse { get; set; }
    }
}