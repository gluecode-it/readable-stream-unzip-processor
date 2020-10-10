import { ReadableToWriteablesSteamProcessor } from '@gluecode-it/readable-to-writeables-stream-processor';
import { Parse, Entry } from 'unzipper';
import { Writable } from 'stream';

export class ReadableStreamUnzipProcessor extends ReadableToWriteablesSteamProcessor {
	parseStream(getWriteableStreamCallback: (filePath: string) => Writable) {
		const stream = Parse();
		stream.on('entry', (entry: Entry) => {
			getWriteableStreamCallback(entry.props.path);
		});
		return stream;
	}
}
