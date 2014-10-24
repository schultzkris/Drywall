using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Owin.Security;
using Drywall.Models;

namespace Drywall.Controllers
{
    public class ContactController : Controller
    {
        [HttpPost]
        public string SubmitContactInfo(ContactModel contactInfo) {
            return "";
        }
    }
}