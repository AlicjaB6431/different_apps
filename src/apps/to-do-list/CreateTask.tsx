import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import Task from './Task';

type Inputs = {
	toDoInput: string;
};

interface TaskData {
	data: string;
	index: number;
}

function CreateTask() {
	const [toDoInput, setToDoInput] = useState([]);

	const [allTasks, setAllTasks] = useState([
		{
			title: '',
			confirmed: true,
		},
		{ title: 'dfgdged', confirmed: true },
	]);
	const { register, getValues, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

	const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const inputValue = getValues('toDoInput');

		setToDoInput(toDoInput => [...toDoInput, inputValue]);
	};

	const handleRemoveTaskButton = index => {
		console.log('ok');
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Nowe zadanie: </label>
				<input
					type='text'
					placeholder='Wpisz zadanie...'
					{...register('toDoInput', { required: true })}
				/>
				<button onClick={handleButtonClick}>Dodaj</button>
			</form>

			<ul>
				{toDoInput.map((data, index) => (
					<Task
						key={index}
						index={index}
						data={data}
						removeClick={handleRemoveTaskButton}
					/>
				))}
			</ul>
		</div>
	);
}

export default CreateTask;
