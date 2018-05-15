namespace KS.Migrations.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddSomethingElse : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Menu", "SomethingElse", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Menu", "SomethingElse");
        }
    }
}
