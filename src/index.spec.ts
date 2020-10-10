import { ReadableStreamUnzipProcessor } from '.';
import { createReadStream } from 'fs';

describe(ReadableStreamUnzipProcessor.name, () => {
	it('should be defined', () => {
		expect(new ReadableStreamUnzipProcessor()).toBeInstanceOf(
			ReadableStreamUnzipProcessor
		);
	});

	it('should call callback twice while test/multipleFiles.zip was read', async () => {
		const processor = new ReadableStreamUnzipProcessor();
		const callback = jest.fn();
		await processor.process(
			createReadStream('test/multipleFiles.zip'),
			callback
		);
		expect(callback).toBeCalledTimes(2);
		expect(callback).toBeCalledWith('1.txt');
		expect(callback).toBeCalledWith('2.txt');
	});
});
