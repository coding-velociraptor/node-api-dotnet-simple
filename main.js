import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotnet from 'node-api-dotnet';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const relativeDLLPath = 'bin/Release/net8.0/node-api-dotnet-simple.dll';
const absoluteDLLPath = join(__dirname, relativeDLLPath);

dotnet.load(absoluteDLLPath);

const greeter = new dotnet.Simple.Greeter();

JSON.stringify(greeter.Greet('Node.js'));