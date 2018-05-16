using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace KS.Web.API.Controllers
{
    public class SampleDataController : ApiController
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [AcceptVerbs("POST")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            try
            {
                var rng = new Random();
                var data = Enumerable.Range(1, 5).Select(index => new WeatherForecast
                {
                    DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                    TemperatureC = rng.Next(-20, 55),
                    Summary = Summaries[rng.Next(Summaries.Length)]
                });
                return data;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }

    }
}