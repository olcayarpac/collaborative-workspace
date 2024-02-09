
using CollabSpaceAPI.Application.Services;
using CollabSpaceAPI.Domain.Configs;
using CollabSpaceAPI.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.Configure<DatabaseSettings>(
    builder.Configuration.GetSection("CollabSpaceDatabase"));
builder.Services.AddSingleton<IAccountRepository, AccountRepository>();
builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.MapControllers();

app.Run();

