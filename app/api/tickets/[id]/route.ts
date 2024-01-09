import Ticket from '../../../models/Ticket';
import { NextResponse,NextRequest } from 'next/server';

export async function DELETE(req:NextRequest,{params}:{params:{id:string}}) {
   try {
      const {id} = params
      const data = await Ticket.findByIdAndDelete(id)
      return NextResponse.json({ message: 'Ticket Deleted' }, { status: 200 });
    } catch (error) {
      console.log();
      return NextResponse.json({ message: 'Error', error }, { status: 500 });
    }
  }
  export async function PUT(req:NextRequest,{params}:{params:{id:string}}) {
   try {
   const {id} = params
     const body = await req.json();
     const ticketData = body;
     const data = await Ticket.findByIdAndUpdate(id,ticketData)
     return NextResponse.json({ message: 'Ticket Created' }, { status: 201 });
   } catch (error) {
     console.log();
     return NextResponse.json({ message: 'Error', error }, { status: 500 });
   }
 }

  export async function GET(req:NextRequest,{params}:{params:{id:string}}) {
   try {
      const {id} = params
      const data = await Ticket.findById(id)
      return NextResponse.json({ message: 'Ticket details',ticket:data}, { status: 200 });
    } catch (error) {
      console.log();
      return NextResponse.json({ message: 'Error', error }, { status: 500 });
    }
  }