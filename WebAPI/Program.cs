using System.Text;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using WebAPI.Data;

internal class Program
{

    private static void Main(string[] args)
    {

        var builder = WebApplication.CreateBuilder(args);  

        // Add services to the container.
        builder.Services.AddControllers();

        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Services.AddCors();

        var builder2 = new SqlConnectionStringBuilder(
            builder.Configuration.GetConnectionString("Default"));
        
            builder2.Password = builder.Configuration.GetSection("ASPNETCORE_DBPassword").Value;

        var ConnectionString = builder2.ConnectionString;

        //var theConnection = builder.Configuration.GetSection("ConnectionStrings:Default").Value;
        builder.Services.AddDbContext<DataContext>(options =>
            options.UseSqlServer(ConnectionString));

        var secretKey = builder.Configuration.GetSection("AppSettings:Key").Value;
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

        var app = builder.Build();

        var env = builder.Environment;

        app.UseHttpsRedirection();

        app.MapControllers();

        app.UseRouting();

        app.UseHsts();
        app.UseHttpsRedirection();

        app.UseCors(m => m.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

        app.UseAuthentication();
        app.UseAuthorization();

        app.UseDefaultFiles();
        app.UseStaticFiles();

        app.Run();
    }
}