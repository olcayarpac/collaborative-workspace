using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CollabSpaceAPI.Domain.Entities
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? Email { get; set; }
        public string? PasswordHash { get; set; }
        // Other user properties and business logic
    }
}
