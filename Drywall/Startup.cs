using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Drywall.Startup))]
namespace Drywall
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
