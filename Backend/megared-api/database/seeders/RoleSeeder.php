<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $rolAdmin= Role::create(['name'=>'admin']);
       $rolEmpl= Role::create(['name'=>'empleado']);
       Permission::create(['name' => 'registrar empleados'])->assignRole($rolAdmin);
       Permission::create(['name' => 'bloquear/desbloquear empleados'])->assignRole($rolAdmin);
       Permission::create(['name' => 'generar Compras'])->assignRole($rolEmpl);
       Permission::create(['name' => 'Listar compras'])->syncRoles([$rolAdmin, $rolEmpl]);
    }
}
