using System;

namespace KS.Domain.Entities
{
    public class Setup : BaseEntity
    {
        public string Title { get; set; }
        public string Version { get; set; }
        public Boolean IsLMSEnabled { get; set; }
        public string Diallegend { get; set; }
    }
}
